function ProjectCard(props) {
  return (
    <>
      <a href={props.projectLink}>
        <div className="w-full sm:w-64">
          <div className="">
            <img
              src={props.projectImage}
              alt="Dreamour website screenshots"
              className=" border border-slate-200 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
