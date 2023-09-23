"use client"

import { useState } from "react";
import { Button } from '@/components/Button'

import { contactFormApi } from "@/api/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

const formText = {
  title: "Contact",
  name: "Name",
  email: "E-mail",
  subject: "Subject",
  message: "Message",
  submit: "Submit",
}

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    contactFormApi(event.currentTarget);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function checkFields() {
    return name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "";
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <FontAwesomeIcon icon={faFileSignature} className="h-6 w-6 flex-none text-zinc-500  dark:text-zinc-400" />
        <span className="ml-3">{formText.title}</span>
      </h2>

      <label
        htmlFor="name"
        className="text-sm font-semibold text-gray-500  mt-8 dark:text-gray-50"
      >
        {formText.name}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      />

      <label
        htmlFor="email"
        className="text-sm font-semibold text-gray-500 mt-4 dark:text-gray-50"
      >
        {formText.email}
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      />

      <label
        htmlFor="subject"
        className="text-sm font-semibold text-gray-500 mt-4 dark:text-gray-50"
      >
        {formText.subject}
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      />

      <label
        htmlFor="message"
        className="text-sm font-semibold text-gray-500 mt-4 dark:text-gray-50"
      >
        {formText.message}
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <Button type="submit" variant="primary" className={`group mt-6 w-full ${checkFields() ? 'opacity-50' : ''}`} disabled={checkFields()}>
          {formText.submit}
          <FontAwesomeIcon icon={faPaperPlane} className={`h-4 w-4 text-zinc-500 transition  dark:text-zinc-400 ${!checkFields() ? 'group-hover:text-red-500 dark:group-hover:text-red-400' : ''}`} />
        </Button>
      </div>
    </form>
  )
}
