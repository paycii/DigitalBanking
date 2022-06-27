package com.sadiqui.digitalbanking.DigitalBanking.repo;

import com.sadiqui.digitalbanking.DigitalBanking.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface BankAccountRepository extends JpaRepository<BankAccount,String> {

}

