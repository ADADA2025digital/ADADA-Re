import React from "react";

export default function ContactCard({ icon, title, value, href }) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      className="contact-info-card"
      href={href || undefined}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      <div className="contact-info-card__icon">{icon}</div>

      {/* <h5 className="contact-info-card__title">{title}</h5> */}

      <div className="contact-info-card__line" />

      <p className="contact-info-card__value">{value}</p>
    </Wrapper>
  );
}
