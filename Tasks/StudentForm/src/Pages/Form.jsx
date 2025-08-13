import { useState } from "react";

const Form = () => {
    return <div>
        <form>
            <label htmlFor="id">Enter ID:</label>
            <input type="number" id="id" />
            <label htmlFor="name">Enter Name:</label>
            <input type="text" id="name" />
            <label htmlFor="department">Enter Department:</label>
            <input type="text" id="department" />
            <label htmlFor="year">Enter Year:</label>
            <input type="number" id="year" />
            <label htmlFor="email">Enter Email:</label>
            <input type="email" id="email" />
            <label htmlFor="address">Enter Address:</label>
            <input type="text" id="address" />
        </form>
    </div>
}

export default Form;