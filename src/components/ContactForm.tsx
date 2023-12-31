'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

import { contactFormApi } from '@/api/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileSignature,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

const formText = {
  title: 'Contact',
  name: 'Name',
  email: 'E-mail',
  subject: 'Subject',
  message: 'Message',
  submit: 'Submit',
  button: {
    submitted: 'Sent',
    error: 'Error happened, try again!',
  },
}

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await contactFormApi(event.currentTarget)
      if (response.success) {
        setFormSubmitted(true)
        resetForm()
      } else {
        setFormError(true)
      }
    } catch (error) {
      setFormError(true)
    }
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  function resetForm() {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  function checkFields() {
    return (
      name.trim() === '' ||
      email.trim() === '' ||
      subject.trim() === '' ||
      message.trim() === ''
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon
          icon={faFileSignature}
          className="h-6 w-6 flex-none text-zinc-500  dark:text-zinc-400"
        />
        <span className="ml-3">{formText.title}</span>
      </h2>

      <label
        htmlFor="name"
        className="mt-8 text-sm font-semibold  text-gray-500 dark:text-gray-50"
      >
        {formText.name}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        name="name"
        className="border-b border-zinc-100 bg-transparent py-1 text-xs text-zinc-500 focus:border-red-500 focus:outline-none dark:border-zinc-700/40 dark:text-zinc-400 dark:focus:border-red-400"
      />

      <label
        htmlFor="email"
        className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-50"
      >
        {formText.email}
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="border-b border-zinc-100 bg-transparent py-1 text-xs text-zinc-500 focus:border-red-500 focus:outline-none dark:border-zinc-700/40 dark:text-zinc-400 dark:focus:border-red-400"
      />

      <label
        htmlFor="subject"
        className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-50"
      >
        {formText.subject}
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value)
        }}
        className="border-b border-zinc-100 bg-transparent py-1 text-xs text-zinc-500 focus:border-red-500 focus:outline-none dark:border-zinc-700/40 dark:text-zinc-400 dark:focus:border-red-400"
      />

      <label
        htmlFor="message"
        className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-50"
      >
        {formText.message}
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        className="border-b border-zinc-100 bg-transparent py-1 text-xs text-zinc-500 focus:border-red-500 focus:outline-none dark:border-zinc-700/40 dark:text-zinc-400 dark:focus:border-red-400"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <Button
          type="submit"
          variant="primary"
          className={`group mt-6 w-full ${checkFields() ? 'opacity-50' : ''}`}
          disabled={checkFields() || formSubmitted}
          submitted={formSubmitted}
          error={formError}
        >
          {formError
            ? formText.button.error
            : formSubmitted
            ? formText.button.submitted
            : formText.submit}
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`h-4 w-4 text-zinc-500 transition  dark:text-zinc-400 ${
              !checkFields() && !formSubmitted
                ? 'group-hover:text-red-500 dark:group-hover:text-red-400'
                : ''
            }`}
          />
        </Button>
      </div>
    </form>
  )
}
