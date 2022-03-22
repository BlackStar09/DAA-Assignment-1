import React from "react";
import styled from "styled-components";
import Slider from "infinite-react-carousel";
import StudentCard from "./StudentCard";
class StudentCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      student: [
        {
          name: "Aswath Vinayak K",
          workedOn: "",
          img: ""
        },
        {
          name: "Sanath Salil",
          workedOn: "",
          img: ""
        },
        {
          name: "Kartheek Nadimpalli",
          workedOn: "",
          img: ""
        }
      ]
    };
  }

  render() {
    const settings = {
      autoplay: false,
      arrows: true
    };
    return (
      <div>
        <span style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
          Group Members
        </span>
        <Slider {...settings}>
          {this.state.student.map((item, index) => {
            return <StudentCard item={item} key={index} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default StudentCarousel;
