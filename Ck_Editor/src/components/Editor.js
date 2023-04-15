import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor(props){
    const custom_config = {
      extraPlugins: [],//[ MyCustomUploadAdapterPlugin ],
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'blockQuote',
          'insertTable',
          '|',
          'imageUpload',
          'undo',
          'redo',
          'findAndReplace',
          'insertImage',
          'mediaEmbed',
          'codeBlock',
          'pageBreak',
          'horizontalLine',
          'specialCharacters',
        ]
      },
      image: {
        styles: [
            'alignCenter',
            'alignLeft',
            'alignRight'
        ],
        resizeOptions: [
            {
                name: 'resizeImage:original',
                label: 'Original',
                value: null
            },
            {
                name: 'resizeImage:50',
                label: '50%',
                value: '50'
            },
            {
                name: 'resizeImage:75',
                label: '75%',
                value: '75'
            }
        ],
        toolbar: [
            'imageTextAlternative', 'toggleImageCaption', '|',
            'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
            'resizeImage'
        ],
        insert: {
            integrations: [
                'insertImageViaUrl'
            ]
        }
    },
      table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
      },
      ckfinder:{
        uploadUrl:'http://localhost:8000/uploads',
        options: {
            resourceType: 'Images'
        }
      },
      link: {
        decorators: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        }
    }
    }
      return(
        <>
         <CKEditor
              editor={ClassicEditor}
              config={ custom_config }
              data={`<div>${props.unit}</div>`}
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
              
                console.log('Editor is ready to use!', editor);
                
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log("===", data );
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
          />
        </>
      )
  }


export default Editor