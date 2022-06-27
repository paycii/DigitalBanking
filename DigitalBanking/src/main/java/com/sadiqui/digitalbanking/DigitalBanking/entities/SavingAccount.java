package com.sadiqui.digitalbanking.DigitalBanking.entities;

import javax.persistence.*;
import lombok.*;

@Entity
@DiscriminatorValue("SA")
@Data @NoArgsConstructor @AllArgsConstructor
public class SavingAccount extends BankAccount {
    private double interestRate;
}