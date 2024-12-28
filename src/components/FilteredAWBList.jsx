import { Link } from 'react-router-dom';

const FilteredAWBList = ({ awb, updateSelected, handleAddAWB }) => {
return (
     <div key={awb.id} >
        <Link to={'/awbDetails'} onClick={(e) => updateSelected(e,awb)}>
            <li>{awb?.fields["HAWB/HBL"]}</li>
        </Link>
        <button onClick={(e) => handleAddAWB(e,awb)}>Add to shortlist</button>
     </div>
)
}
console.log(FilteredAWBList);
export default FilteredAWBList