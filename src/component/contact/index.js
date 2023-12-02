import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";

export default function Contact({ name, src, rate, time, info, phone }) {
  return (
    <div>
      <div className="contact">
        <img src={src} alt={name} className="avatar" />

        <div className="contact__block">
          <Heading>Господар - {name}</Heading>
          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>
            <span className="title__sub-value">{time}</span>
            <span className="title__sub-value">{rate} % швидкості відгуку</span>
          </div>
        </div>
      </div>
      <p className="contact__info">{info}</p>
    </div>
  );
}
