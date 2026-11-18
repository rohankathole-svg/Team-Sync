import React from "react";
import StatusBadge from "./StatusBadge";
import EmployeeActions from "./EmployeeActions";
import { updateEmployee } from "../../../api/employeeApis";

const EmployeeRow = ({ employee, onUpdate, onDelete, onToggleStatus }) => {
  return (
    <tr className="border-b border-[var(--border-color)]">
      {/* PROFILE */}
      <td className="py-6 px-6">
        <div className="flex items-center gap-4">
          <img
            src={
              employee.avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                employee.name
              )}`
            }
            alt={employee.name}
            className="
              w-14 h-14
              rounded-full
              object-cover
            "
          />

          <div>
            <h3
              className="
                font-semibold
                text-lg
                text-[var(--text-primary)]
              "
            >
              {employee.name}
            </h3>

            <p className="text-[var(--text-secondary)]">{employee.email}</p>
          </div>
        </div>
      </td>

      {/* ROLE */}
      <td className="px-6">
        <span
          className="
            inline-flex
            px-4 py-2
            rounded-xl
            bg-[var(--bg-card)]
            text-[var(--text-secondary)]
            border border-[var(--border-color)]
            font-medium
            text-sm
            capitalize
          "
        >
          {employee.role}
        </span>
      </td>

      {/* DEPARTMENT */}
      <td
        className="
          px-6
          text-[var(--text-primary)]
          capitalize
        "
      >
        {employee.department}
      </td>

      {/* STATUS */}
      <td className="px-6">
        <StatusBadge status={employee.status} />
      </td>

      {/* DATE */}
      <td
        className="
          px-6
          text-[var(--text-secondary)]
        "
      >
        {new Date(employee.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </td>

      {/* ACTIONS */}
      <td className="px-6 pr-8">
        <EmployeeActions
          employee={employee}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onInactive={async()=>{
             if(employee.status === "inactive"  ? await updateEmployee(employee?._id,{status:"active"}):await updateEmployee(employee?._id,{status:"inactive"})
             )
             alert("employee status updated")
          }}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;
