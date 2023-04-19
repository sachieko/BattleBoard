import { redirect, Params } from "react-router-dom";

interface IdeleteParams {
    params: Params<string>;
}

export async function action({ params }: IdeleteParams) {
    setTimeout(() => alert(`deleted board ${params.boardId}!`), 1000)
    return redirect('/');
};