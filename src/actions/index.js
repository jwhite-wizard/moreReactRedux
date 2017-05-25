

export function selectBook(book){
    //selectBook is an ActionCreator, it needs to return an action
    //an aobject with a type property.
    return{
        type: 'Book_SELECTED',
        payload: book
    };

}