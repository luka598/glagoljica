import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '@/state/text';

function TextInput() {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} className=' border-2 border-primary rounded-md bg-secondary-fg' />
            <p>Count from TextInput: {count}</p>
        </div>
    );
}

export default TextInput;