import { ChangeEvent, HtmlHTMLAttributes, useRef } from 'react';
import { helpers } from '@alpha/utils';
import { File } from 'react-feather';

import Button from '../Button/Button';

export interface FileUploadProps extends HtmlHTMLAttributes<HTMLDivElement> {
  name: string;
  value?: File;
  accept: string;
  isSubmitting?: boolean;
  handleSubmit?: () => void;
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean
  ) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export function FileUpload({
  name,
  accept,
  className,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  children = 'Drag and drop your file here to upload it',
}: FileUploadProps) {
  /**
   * hooks
   */
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={helpers.classNames(
        className,
        'text-muted',
        'py-10 px-6 text-center w-full'
      )}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const items = e.dataTransfer.items;
        if (items) {
          if (items[0].kind === 'file') {
            setFieldValue(name, items[0].getAsFile());
            setTimeout(() => setFieldTouched(name, true));
            setTimeout(() => handleSubmit && handleSubmit(), 500);
          }
        }
      }}
    >
      <div
        className={helpers.classNames(
          'w-10 h-10',
          'flex mx-auto mb-4',
          'rounded-full bg-gray-100'
        )}
      >
        <File className="m-auto" />
      </div>

      <Button
        type="button"
        className="mx-auto bg-gray-100 text-muted !h-[38px] mb-4"
        onClick={() => fileUploadRef?.current?.click()}
        {...{ isSubmitting }}
      >
        Upload file
      </Button>

      <p>{children || 'Drag and drop your file here to upload it'}</p>

      <input
        type="file"
        accept={accept}
        className="hidden"
        ref={fileUploadRef}
        onChange={({
          currentTarget: { files },
        }: ChangeEvent<HTMLInputElement>) => {
          setFieldValue(name, files && files[0]);
          setTimeout(() => setFieldTouched(name, true));
          setTimeout(() => handleSubmit && handleSubmit(), 500);
        }}
      />
    </div>
  );
}

export default FileUpload;
