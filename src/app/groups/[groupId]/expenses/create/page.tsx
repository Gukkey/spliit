import { ExpensePage } from '@/app/groups/[groupId]/expenses/expense-page'
import { ExpenseForm } from '@/components/expense-form'
import { getGroup } from '@/lib/api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Create expense',
}

export default async function CreateExpensePage({
  params: { groupId },
}: {
  params: { groupId: string }
}) {
  const group = await getGroup(groupId)
  if (!group) notFound()

  return (
    <ExpensePage title="Create expense">
      <ExpenseForm group={group} />
    </ExpensePage>
  )
}
