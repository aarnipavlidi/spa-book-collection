/* eslint-disable no-magic-numbers */
import { notificationProps } from '../../types/hooks/notification.props';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Notification from '../notification';
import ContainerInput from './container.input';
import Button from '../button';

import useCreateNewBook from '../../hooks/useCreateNewBook';
import useDeleteOldBook from '../../hooks/useDeleteOldBook';
import useGetBookByID from '../../hooks/useGetBookByID';

const Book: React.FC = () => {
  const [notificationMessage, setNotificationMessage] = useState<notificationProps>({ message: '', status: true });
  const [titleValue, setTitleValue] = useState<string>('');
  const [authorValue, setAuthorValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');

  const params = useParams();
  const navigate = useNavigate();
  const getCurrentID = params.id ? params.id : '';

  const { bookData } = useGetBookByID(getCurrentID);
  const { createBookDatabase, createBookLoading } = useCreateNewBook();
  const { deleteBookDatabase, deleteBookLoading } = useDeleteOldBook(getCurrentID);

  useEffect(() => {
    setTitleValue('');
    setAuthorValue('');
    setDescriptionValue('');
  }, [getCurrentID]);

  const handleCreateNewBook = async () => {
    try {
      const response = await createBookDatabase({ title: titleValue, author: authorValue, description: descriptionValue });
      setTitleValue('');
      setAuthorValue('');
      setDescriptionValue('');

      if (response.data?.createNewBook) {
        setNotificationMessage({
          message: response.data.createNewBook.message,
          status: true,
        });

        setTimeout(() => {
          setNotificationMessage({
            message: '',
            status: true,
          });
        }, 5000);
      }

      return null;
    } catch (error: any) {
      setNotificationMessage({
        message: error.message as string,
        status: false,
      });

      setTimeout(() => {
        setNotificationMessage({
          message: '',
          status: true,
        });
      }, 5000);
    }
  };

  const handleDeleteOldBook = async () => {
    try {
      const response = await deleteBookDatabase({ id: getCurrentID });
      setTitleValue('');
      setAuthorValue('');
      setDescriptionValue('');

      if (response.data?.deleteOldBook) {
        setNotificationMessage({
          message: response.data.deleteOldBook.message,
          status: true,
        });

        setTimeout(() => {
          setNotificationMessage({
            message: '',
            status: true,
          });
        }, 5000);

        navigate('/');
      }

      return null;
    } catch (error: any) {
      setNotificationMessage({
        message: error.message as string,
        status: false,
      });

      setTimeout(() => {
        setNotificationMessage({
          message: '',
          status: true,
        });
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto px-5 py-10 basis-1/2">
      <Notification
        styling="p-4 mb-4"
        defaultLabel="Please add new book into collection."
        notification={notificationMessage}
      />
      <ContainerInput
        labelID="titleLabel"
        labelStyle="text-md font-pier-sans"
        labelValue="Title"
        inputID="title-input"
        inputElement="input"
        inputStyle="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
        inputPlaceholder={(!titleValue && !bookData?.getBookByID?.title) ? 'Enter book\'s title.' : ''}
        inputValue={titleValue ? titleValue : bookData?.getBookByID?.title ? bookData.getBookByID.title : ''}
        inputUpdate={(value: string) => setTitleValue(value)}
      />
      <ContainerInput
        containerStyle="py-5"
        labelID="authorLabel"
        labelStyle="text-md font-pier-sans"
        labelValue="Author"
        inputID="author-input"
        inputElement="input"
        inputStyle="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
        inputPlaceholder={(!authorValue && !bookData?.getBookByID?.author) ? 'Enter book\'s author.' : ''}
        inputValue={authorValue ? authorValue : bookData?.getBookByID?.author ? bookData.getBookByID.author : ''}
        inputUpdate={(value: string) => setAuthorValue(value)}
      />
      <ContainerInput
        labelID="descriptionLabel"
        labelStyle="text-md font-pier-sans"
        labelValue="Description"
        inputID="description-input"
        inputElement="textarea"
        inputStyle="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
        inputPlaceholder={(!descriptionValue && !bookData?.getBookByID?.description) ? 'Enter book\'s description.' : ''}
        inputValue={descriptionValue ? descriptionValue : bookData?.getBookByID?.description ? bookData.getBookByID.description : ''}
        inputUpdate={(value: string) => setDescriptionValue(value)}
        inputRows={4}
      />
      <div className="flex justify-start">
        <Button
          label="Save New"
          buttonStyling="mt-5 mr-3"
          onClick={handleCreateNewBook}
          buttonLoading={createBookLoading}
          disabled={!!bookData}
          iconName="arrow-path"
          iconStyling="aspect-ratio h-6 w-6 mx-1"
        />
        <Button
          label="Delete"
          buttonStyling="mt-5 mr-3"
          onClick={handleDeleteOldBook}
          buttonLoading={deleteBookLoading}
          disabled={!bookData}
          iconName="arrow-path"
          iconStyling="aspect-ratio h-6 w-6 mx-1"
        />
      </div>
    </div>
  );
};

export default Book;
