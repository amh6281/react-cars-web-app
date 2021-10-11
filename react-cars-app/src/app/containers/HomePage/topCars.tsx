import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
`}
`;

export function TopCars() {
  const testCar: ICar = {
    name: "Audi S3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "Benz gle 63 amg",
    mileage: "10k",
    thumbnailSrc:
      "https://image.ajunews.com/content/image/2017/02/07/20170207123747974474.jpg",
    dailyPrice: 60,
    monthlyPrice: 1700,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar3: ICar = {
    name: "Genesis g80",
    mileage: "20k",
    thumbnailSrc:
      "http://image.newdaily.co.kr/site/data/img/2018/10/24/2018102400002_0.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>판매 순위 TOP 3</Title>
      <CarsContainer>
        <Car {...testCar} />
        <Car {...testCar2} />
        <Car {...testCar3} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
