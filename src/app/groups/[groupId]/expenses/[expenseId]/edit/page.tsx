import { ExpensePage } from '@/app/groups/[groupId]/expenses/expense-page'
import { ExpenseForm } from '@/components/expense-form'
import { getExpense, getGroup } from '@/lib/api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Edit expense',
}

export default async function EditExpensePage({
  params: { groupId, expenseId },
}: {
  params: { groupId: string; expenseId: string }
}) {
  const group = await getGroup(groupId)
  if (!group) notFound()
  const expense = await getExpense(groupId, expenseId)
  if (!expense) notFound()

  return (
    <ExpensePage title="Edit expense">
      <ExpenseForm group={group} expense={expense} />
    </ExpensePage>
  )
}
