import {useState} from "react";

interface Props {
    onAdd: (text: string) => void
}
function TodoInput({ onAdd }:Props){
    const [text, setText] = useState('')

    const handleSubmit = () => {
        if(text.trim() === '') return
        onAdd(text)
        setText('')
    }
    return (
        <div className="flex gap-2 mb-4">
            <input
                type = "text"
                value = {text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit}
                placeholder="할 일을 입력하세요."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                추가
            </button>
        </div>
    )
}

export default TodoInput