import Header from "../molecules/Header";
import Buttons from '../molecules/fullFacts';


function FactsPage  ()  {
  const handleSelectChange = (filterValue) => {
    {filterValue};
  }
  return (
    <div>
      <Header/>
      <Buttons/>
      <h1 className='text-4xl text-orange-500 p-8 underline'></h1>
    </div>
  );
}
export default FactsPage;