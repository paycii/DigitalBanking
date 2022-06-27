package com.sadiqui.digitalbanking.DigitalBanking;

import com.sadiqui.digitalbanking.DigitalBanking.dtos.*;
import com.sadiqui.digitalbanking.DigitalBanking.exceptions.*;
import com.sadiqui.digitalbanking.DigitalBanking.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.stream.Stream;



@SpringBootApplication
public class DigitalBankingApplication {


	public static void main(String[] args) {


		SpringApplication.run(DigitalBankingApplication.class, args);

	}


//	@Bean
//	CommandLineRunner commandLineRunner(BankAccountService bankAccountService) {
//		List<BankAccountDTO> bankAccounts = bankAccountService.bankAccountList();
//
//		return args -> {
//
//			for (BankAccountDTO bankAccount : bankAccounts) {
//				for (int i = 0; i < 10; i++) {
//					String accountId;
//					if (bankAccount instanceof SavingBankAccountDTO) {
//						accountId = ((SavingBankAccountDTO) bankAccount).getId();
//					} else {
//						accountId = ((CurrentBankAccountDTO) bankAccount).getId();
//					}
//					bankAccountService.credit(accountId, 10000 + Math.random() * 120000, "Credit");
//					bankAccountService.debit(accountId, 1000 + Math.random() * 9000, "Debit");
//				}
//			}
//
////			Stream.of("Hassan", "Imane", "Mohamed").forEach(name -> {
////				CustomerDTO customer = new CustomerDTO();
////				customer.setName(name);
////				customer.setEmail(name + "@gmail.com");
////				bankAccountService.saveCustomer(customer);
////			});
////
////			bankAccountService.listCustomers().forEach(customer -> {
////				try {
////					bankAccountService.saveCurrentBankAccount(Math.random() * 90000, 9000, customer.getId());
////					bankAccountService.saveSavingBankAccount(Math.random() * 120000, 5.5, customer.getId());
////				} catch (CustomerNotFoundException e) {
////					e.printStackTrace();
////				}
////			});
//
//		};
//
//	}
}








