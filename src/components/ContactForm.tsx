"use client"

import { useState } from "react";
import { Button } from '@/components/Button'
import {
  ContactIcon,
  SendIcon
} from '@/components/Icons'

export default function ContactForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "20f75c1d-7002-4e69-a177-594073d84a0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        <ContactIcon className="h-6 w-6 flex-none fill-zinc-500  dark:fill-zinc-400 " />
        <span className="ml-3">Contact</span>
      </h2>

      <label
        htmlFor="fullName"
        className="text-sm font-semibold text-gray-500  mt-8 dark:text-gray-50"
      >
        Name
      </label>
      <input
        type="text"
        required
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        name="fullName"
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      />


      <label
        htmlFor="email"
        className="text-sm font-semibold text-gray-500 mt-4 dark:text-gray-50"
      >
        E-mail
      </label>
      <input
        type="email"
        required
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
        Subject
      </label>
      <input
        type="text"
        required
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
        Message
      </label>
      <textarea
        name="message"
        required
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="bg-transparent border-b border-zinc-100 py-1 dark:border-zinc-700/40 focus:outline-none focus:border-red-500 dark:focus:border-red-400 text-xs text-zinc-500 dark:text-zinc-400"
      ></textarea>

      <div className="flex flex-row items-center justify-start">
        <Button type="submit" variant="secondary" className="group mt-6 w-full">
          Submit
          <SendIcon className="h-4 w-4 fill-zinc-500 transition group-hover:fill-red-500 dark:fill-zinc-400 dark:group-hover:fill-red-400" />
        </Button>
      </div>
    </form>
  )
}