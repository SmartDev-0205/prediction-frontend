import Chart from "./Chart";
const Graph = ({
    poolId,
    btcPrice
}) => {
    return (
        <div className="w-full flex p-[10px] pt-0 pb-[25px] ">
            <Chart className="w-full" />
        </div>
    )
}

export default Graph;