import { setToast } from "@/store";
import { appDispatch } from "@/store/store";

function handleApiError(error: any) {
    switch (error?.status) {
        case 400:
            console.log('handleApiError', error.status)
            appDispatch(setToast({ error: true, message: error.data.error }))
    }
}

function handleApiSuccess(response: any) {
    appDispatch(setToast({ error: false, message: 'Operation successful' }))
}

export {
    handleApiError,
    handleApiSuccess
}