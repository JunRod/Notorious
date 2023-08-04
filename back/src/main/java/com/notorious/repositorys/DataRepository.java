package com.notorious.repositorys;

import com.notorious.models.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepository extends JpaRepository<Data, String> {
    Data findByWordEnglish (String WordEnglish);
}
