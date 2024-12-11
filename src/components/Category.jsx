import { Chip } from "@nextui-org/react";

function Category() {
  return (
    <>
      <marquee>
        <div className="flex justify-center items-center gap-5 mt-5">
          <Chip
            color="primary"
            variant="bordered"
            className="text-xs text-white"
          >
            Landing Page
          </Chip>
          <Chip
            color="primary"
            variant="bordered"
            className="text-xs text-white"
          >
            E-Commerce
          </Chip>
          <Chip
            color="primary"
            variant="bordered"
            className="text-xs text-white"
          >
            Company Profile
          </Chip>
        </div>
      </marquee>
    </>
  );
}

export default Category;
