const DocsPage = ({ params }) => {
  console.log(params);
  return <div> {params.id} Page</div>;
};

export default DocsPage;
