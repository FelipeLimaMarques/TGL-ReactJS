export interface FormElement {
    id: string,
    config: {
        elementType: string,
        elementConfig: {
            type: string,
            placeholder: string
        },
        value: string,
        validation: {
            required: boolean,
            isEmail: boolean
        },
        valid: boolean,
        touched: boolean
    }
}