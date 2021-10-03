import { Link } from "react-router-dom";
import { UsersResultsData } from "../context/types";

interface ModalProps {
    handleCloseModal: () => void;
    data: UsersResultsData;
}

const UserInfoModal = ({ handleCloseModal, data }: ModalProps) => {


    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/4 mx-auto">
                    <div className="border-0 shadow-lg relative flex flex-col w-full bg-white">
                        <header className="flex p-5 mb-5">
                            <img src={data?.picture?.large} alt={data?.fullname} className="absolute -top-12 left-44 rounded-full" />
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={handleCloseModal}
                            >
                                <span className="bg-transparent text-textColor opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    x
                                </span>
                            </button>
                        </header>
                        <h3 className="text-3xl font-semibold text-center">
                            {data?.fullname}
                        </h3>
                        <section className="relative p-6 flex-auto">
                            <strong>ID:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.login?.uuid}</p>
                            <strong>Email:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.email}</p>
                            <strong>Gênero:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.gender}</p>
                            <strong>Birthday:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.birthday}</p>
                            <strong>Telephone:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.phone}</p>
                            <strong>Cellphone:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.cell}</p>
                            <strong>Nationality:</strong>
                            <p className=" text-blueGray-500 text-base ">{data?.nat}</p>
                            <strong>Address:</strong>
                            <p className=" text-blueGray-500 text-base ">
                                {`${data?.location?.street?.name} ${data?.location?.street?.number},
                                ${data?.location?.city}, ${data?.location?.state}, ${data?.location?.country} `}
                            </p>
                            <strong>URL de Compartilhamento:</strong>
                            <Link to={`page=${data?.fromPage}/${data?.login?.uuid}`} target="_blank" rel="noreferrer">
                                URL do perfil
                            </Link>

                        </section>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default UserInfoModal;