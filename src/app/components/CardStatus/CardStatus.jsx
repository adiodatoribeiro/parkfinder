import { CarSimple } from "@phosphor-icons/react/dist/ssr";

export default function CardStatus() {
    return (
        <div className=" bg-blue-950 rounded-2xl flex flex-col justify-between m-2 text-white p-3 px-5 flex-shrink">
            <div className="flex min-w-full">
                <div className="flex-1 flex justify-start font-bold">
                    Nº 001
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
            </div>
            <div className="flex flex-grow space-x-3 flex-row justify-center items-center">
                <CarSimple size={26} />
                <p className="font-black text-xl">PMV9394</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex-1 flex justify-center">
                    E: <span className="font-bold">00:00:00</span>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    S: <span className="font-bold">00:00:00</span>
                </div>
            </div>
        </div>
    )
}