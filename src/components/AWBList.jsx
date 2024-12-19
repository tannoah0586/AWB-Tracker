const AWBList = (props) => {
    const awb = props.awbList.map((awb) => <li key={awb.id}>{awb.fields["HAWB/HBL"]}</li>)
    return (
        <div>
        <h1>AWB List</h1>
        <ul>{awb}</ul>
        </div>
    );
};

export default AWBList;