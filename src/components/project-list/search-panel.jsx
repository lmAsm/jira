export const SearchPanel = ({param, setParam}) => {
    return (
        <form action=''>
            <input value={param.name} onChange={e => setParam({ ...param, name: e.target.value })} />
        </form>
    );
};