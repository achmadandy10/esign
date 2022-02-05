import React from 'react';
import UploadFile from './UploadFile';

const FormAddDocument = () => {
    return (
        <form action=''>
            <h1 className="text-3xl mb-5">Tambahkan Dokumen</h1>
            <UploadFile />
        </form>
    )
}

export default FormAddDocument;
