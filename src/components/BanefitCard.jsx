import { Card, CardHeader, CardBody } from "@nextui-org/react";

function BanefitCard(props) {
  return (
    <>
      <Card className="bg-slate-900 p-3 sm:w-52">
        <CardHeader>
          <div className="bg-gradient-to-tr from-green-500 to-emerald-200 w-10 h-10 rounded-full flex justify-center items-center">
            <i className={`${props.icon} text-lg text-white`}></i>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <h1 className="text-md font-semibold text-white">{props.title}</h1>
          <p className="text-sm font-normal text-white opacity-80">
            {props.description}
          </p>
        </CardBody>
      </Card>
    </>
  );
}

export default BanefitCard;
