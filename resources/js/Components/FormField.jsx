export default function FormField({ label, error, children }) {
    return (
        <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">{label}</label>
            {children}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
