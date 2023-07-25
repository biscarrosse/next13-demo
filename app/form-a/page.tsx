"use client";
import { useState, type SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const SUBMIT_URL = "/api/form";

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      fullName: { value: string };
      email: { value: string };
      password: { value: string };
      number: { value: number };
      select: { value: string };
    };

    const fullName = target.fullName.value;
    const email = target.email.value;
    const password = target.password.value;
    const number = target.number.value;
    const select = target.select.value;

    const data = {
      fullName,
      email,
      password,
      number,
      select,
      checkbox: isChecked,
    };

    console.log("___ data: ", data);
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(SUBMIT_URL, options);
      const result = await response.json();

      console.log("___ response: ", response);
      console.log("___ result: ", result);

      const params = new URLSearchParams();
      params.append("success", "true");
      params.append("okay", "1");

      const nextUrl = "/about?" + params.toString();

      router.replace(nextUrl);
    } catch (error) {
      console.log("___ error: ", error);
    }
  };

  return (
    <div>
      <h1 className="mb-2 text-xl">A form:</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          name="fullName"
          required
          className="mb-2 bg-neutral-200"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          required
          className="mb-2 bg-neutral-200"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          required
          minLength={3}
          maxLength={6}
          className="mb-2 bg-neutral-200"
        />

        <label htmlFor="number">Favorite number:</label>
        <input type="number" name="number" className="mb-2 bg-neutral-200" />

        <label htmlFor="select">Favorite number:</label>
        <select name="select" className="mb-2 bg-neutral-200">
          <option value="">- Please select an option -</option>
          <option value="a">Option A</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
        </select>

        <label htmlFor="checkbox">Agree with terms & conditions:</label>
        <input
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="mb-2 bg-neutral-200"
        />

        <button type="submit" className="p-2 bg-blue-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
