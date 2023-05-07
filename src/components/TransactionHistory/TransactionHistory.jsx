import {TransactionTable, TableTh, TableTr, TableTd} from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  console.log('transactions', transactions);
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>

      <tbody>
		{transactions && transactions.map(({type, amount, currency, id}) => 
			<TableTr key={id}>
			<TableTd>{type}</TableTd>
			<TableTd>{amount}</TableTd>
			<TableTd>{currency}</TableTd>
		  </TableTr>
		  )}
      </tbody>
    </TransactionTable>
  );
};

export default TransactionHistory;
