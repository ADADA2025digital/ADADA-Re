import React, { useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../Components/Button";
import TeamCard from "../Components/TeamCard";
import { teamCardsData } from "../Constant/Data";


export default function TeamCarousel() {
  const total = teamCardsData.length;

  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 4; // ✅ like screenshot
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [startIndex, setStartIndex] = useState(0);

  // ✅ Responsive visible count
  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount();
      setVisibleCount(vc);
      setStartIndex((s) => Math.min(s, Math.max(0, total - vc)));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [total]);

  // ✅ Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((s) => {
        if (s + visibleCount >= total) return 0;
        return s + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [visibleCount, total]);

  const visibleCards = useMemo(() => {
    return teamCardsData.slice(startIndex, startIndex + visibleCount);
  }, [startIndex, visibleCount]);

  const next = () => {
    setStartIndex((s) => (s + visibleCount >= total ? 0 : s + 1));
  };

  const prev = () => {
    setStartIndex((s) => (s === 0 ? Math.max(0, total - visibleCount) : s - 1));
  };

  return (
    <div>
      {/* Cards */}
      <div
        className="d-grid"
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {visibleCards.map((item) => (
          <TeamCard key={item.id} {...item} />
        ))}
      </div>

      {/* Nav (your Button component) */}
      {/* <div className="d-flex justify-content-center gap-2 mt-4">
        <Button className="offer-nav-btn py-1" onClick={prev} icon={<FaArrowLeft />} />
        <Button className="offer-nav-btn py-1" onClick={next} icon={<FaArrowRight />} />
      </div> */}
    </div>
  );
}
