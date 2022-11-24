2 main syntax for typing

1. passing type as an argument when calling a function

const [selectedTags, setSelectedTags] = useState<Tag[]>([])

2. typing the argument when declaring a function / component

const NoteForm = ({onSubmit, onAddTag,}: NoteFormProps) => {
...
}
