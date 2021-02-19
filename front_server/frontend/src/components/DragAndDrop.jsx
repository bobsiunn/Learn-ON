import React, {Component, useCallback} from 'react';
import Dropzone,  {useDropzone} from "react-dropzone";
import axios from "axios";

export default function MyDropzone() {
    const onDrop = useCallback(async (acceptedFiles) => {
        const formData = new FormData();
        const config = {
            header: {
                "content-type": "multipart/form-data",
                "data":{}
            },
        };
        formData.append("file", acceptedFiles[0]);
        console.log(acceptedFiles[0]);

        // 배포시에는 지워줘야 합니다.
        axios.defaults.baseURL = "http://localhost:3001/";
        await axios.post("/api/image/upload", formData, config).then((res) => {
            console.log(res);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const InputProps = {
        ...getInputProps(),
        multiple: false,
        accept: "image/gif, image/jpg, image/jpeg",
    };

    const RootProps = {
        ...getRootProps(),
    };

    return (
        <Dropzone {...RootProps} maxSize={100} multiple={false}>
            <input {...InputProps} />
            {isDragActive ? (
                <p>이제 이미지를 놓아주세요</p>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div style={{ fontSize: "3em", marginBottom: "5px" }}>
                        <i className="fas fa-file-upload"></i>
                    </div>
                    <div>이미지 드랍 or 클릭</div>
                </div>
            )}
        </Dropzone>
    );
}