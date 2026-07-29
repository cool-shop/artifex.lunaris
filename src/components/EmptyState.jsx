import { LayoutGrid } from 'lucide-react';

const EmptyState = () => {
    return (
        <div className="text-center py-32 bg-cat-darkest/50 rounded-[3rem] border-4 border-dashed border-cat-light/50 w-full">
            <LayoutGrid size={64} className="mx-auto text-slate-200 mb-6" />
            <h3 className="text-xl font-bold text-slate-400">Sin productos disponibles</h3>
            <p className="text-slate-300 font-medium">Intenta con otra categoría o término.</p>
        </div>
    );
};

export default EmptyState;
