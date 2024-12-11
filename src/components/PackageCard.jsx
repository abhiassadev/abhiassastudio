import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";

function PackageCard(props) {
  return (
    <>
      <Card className="p-3 sm:w-80">
        <CardHeader className="flex-col items-start">
          <h1 className="text-md font-semibold text-emerald-300">
            {props.packageName}
          </h1>
          <h1 className="text-2xl font-bold text-emerald-400">
            IDR {props.price}/Tahun
          </h1>
          <p className="text-xs font-normal text-black opacity-80">
            {props.data.description}
          </p>
        </CardHeader>
        <CardBody className="gap-3">
          {props.data.banefits.map((banefit, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-emerald-400 w-5 h-5 flex justify-center items-center rounded-full">
                  <i className="bi bi-check text-white"></i>
                </div>
                <p className="text-sm font-normal text-black opacity-80">
                  {banefit}
                </p>
              </div>
            );
          })}
        </CardBody>
        <CardFooter className="gap-3">
          <Link href={props.data.redirect_link}>
            <Button className="bg-gradient-to-r from-blue-500 to-emerald-200 text-base font-medium text-white">
              Order
            </Button>
          </Link>
          <Dropdown>
            <DropdownTrigger>
              <Button className="" variant="bordered">
                Fitur
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {props.data.features?.map((feature, index) => {
                return (
                  <DropdownItem key={index}>
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-400 w-5 h-5 flex justify-center items-center rounded-full">
                        <i className="bi bi-check text-white"></i>
                      </div>
                      <p className="text-sm font-normal text-black opacity-80">
                        {feature}
                      </p>
                    </div>
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </CardFooter>
      </Card>
    </>
  );
}

PackageCard.PropTypes = {};

export default PackageCard;
