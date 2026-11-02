export default function ConfirmModal({ open, title, message, confirmLabel = 'Delete', onConfirm, onCancel }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
            <div className="w-full max-w-md rounded bg-white p-6 shadow-xl">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{message}</p>
                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onCancel} className="rounded border px-4 py-2">Cancel</button>
                    <button onClick={onConfirm} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
