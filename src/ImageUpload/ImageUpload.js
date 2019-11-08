import React from 'react';
import ImageUploader from 'react-images-upload';


export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='이미지 넣기'
                onChange={this.props.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                withIcon={false}
                label={'최대 파일 크기 5Mb, 파일 형식 jpg | gif | png'}
            />
        );
    }
}