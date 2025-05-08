import PageHeader from "./PageHeader";

const Certificate = () => {
  return (
    <section>
      <PageHeader home={"Home"} page={"Certificate"} link={"/certificate"} />
      <div className="flex-center py-8 px-4 flex-col gap-5">
        <img
          src="/internship certificate.jpg"
          alt="internship pakistan certificate"
          className="w-250 h-auto border-8 border-mypurple"
        />
        <img
          src="/certificate procom25_page-0001.jpg"
          alt="procom participate certificate"
          className="w-250 h-auto border-8 border-mypurple"
        />
      </div>
    </section>
  );
};

export default Certificate;
