import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'
import Select from './Select'
import { ICONButtonArrows } from './Icons'
import NumericInput from 'react-numeric-input';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import './BookingForm.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Booking Enquiry',
    subject: '', // optional subject of the notification email
    action: '',
    honeypot: 'confirm',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      alert: '',
      disabled: false
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        throw new Error('Network error')
      }
    })
    .then(() => {
      form.reset()
      this.setState({
        alert: this.props.successMessage,
        disabled: false
      })
    })
    .catch(err => {
      console.error(err)
      this.setState({
        disabled: false,
        alert: this.props.errorMessage
      })
    })
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const { name, subject, action, honeypot } = this.props

    return (
      <form
        className="Form BookingForm"
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=""
        data-netlify-honeypot={honeypot}
      >
        {this.state.alert && (
          <div className="Form--Alert">{this.state.alert}</div>
        )}
        <label className="Form--Label">
          <input
            className="Form--Input"
            type="text"
            placeholder="Name*"
            name="name"
            required
          />
        </label>
        <label className="Form--Label">
          <input
            className="Form--Input"
            type="email"
            placeholder="Email*"
            name="emailAddress"
            required
          />
        </label>
        <label className="Form--Label">
          <input
            className="Form--Input"
            type="text"
            placeholder="Company Name"
            name="companyName"
          />
        </label>
        <label className="Form--Label">
          <input
            className="Form--Input"
            type="text"
            placeholder="Phone*"
            name="phone"
            required
          />
        </label>
        <label className="Form--Label full-width">
          <span>Approx. number of guests*</span>
          <NumericInput className="form-control" min={0} mobile required />
        </label>
        <Select
          placeholder='Charter Enquiry*'
          name='charterEnquiry'
          options={[
            "Option 1",
            "Option 2",
            "Option 3",
          ]}
        />
        <Select
          placeholder='Select a Charter*'
          name='charter'
          options={[
            "Raft Ups",
            "Hen's Parties",
            "Birthday Parties",
            "Corporate Events",
            "Christmas Parties",
            "Memorial Ashes Scattering",
            "Wedding Proposals",
            "Romantic Couples Only",
            "Family with Kids",
            "Holiday",
            "Private Charters",
            "Bucks Parties"
          ]}
        />
        <label className="Form--Label">
          <span>Preffered Date* (if unsure please select any date within Preffered month)</span>
          <DatePicker
            className='Form--Input'
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </label>
        <Select
          placeholder='How did you hear about us?*'
          name='source'
          options={[
            "Internet",
            "Mail Ad",
            "Friend",
          ]}
        />
        <input
          type="hidden"
          name={honeypot}
          className="Form--Input-honey"
          placeholder="Leave blank if you are a human"
        />
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input type="hidden" name="form-name" value={name} />
        <div className='form-footer'>
          <input
            className="button Form--SubmitButton"
            type="submit"
            value="Send"
            disabled={this.state.disabled}
          />
          <ICONButtonArrows />
        </div> 
      </form>
    )
  }
}

export default Form
