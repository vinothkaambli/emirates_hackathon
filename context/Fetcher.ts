
export const GetApiFetcher = async<T>(url: RequestInfo | URL): Promise<T | string> => {
    const res: Response = await fetch(url);
    try {
        if (!res.ok) {
            const error = new Error('An error occurred while fetching the data.');
            error.message = await res.json();
            error.cause = res.status;
            throw error;
        }
        return res.json();
    }
    catch (error) {
        return "";
    }
}

export const PostApiFetcher = async<T>(url: RequestInfo | URL, postbody: object): Promise<T> => {
    const res: Response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postbody),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.')
        error.message = await res.json()
        error.cause = res.status
        throw error
    }
    return res.json()
}