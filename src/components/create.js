import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const[form, setForm] = useState({
        title:"",
        description:"",
        importance:"",
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newEvent = { ...form };

        await fetch("https://attck-recipes-back-end.herokuapp.com/recipes", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
        .catch(error => {
            window.alert(error);
            return;
        })

        setForm({title:"", description:"", importance:""});
        navigate("/event");
    }

    return (
        <div>
            <h3>Create New Event</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor = "title">Event Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Event Description</label>
                    <input
                        type="text"
                        className="form-control"
                        value = {form.text}
                        onChange={(e) => updateForm({ text: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="importance">Importance</label>
                    <input
                        type="text"
                        defaultValue="!-!!!"
                        className="form-control"
                        value = {form.importance}
                        onChange={(e) => updateForm({ importance: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Event"
                        className = "btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}