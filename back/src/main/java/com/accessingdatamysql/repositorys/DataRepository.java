package com.accessingdatamysql.repositorys;

import com.accessingdatamysql.models.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepository extends JpaRepository<Data, String> {
    Data findByWordEnglish (String WordEnglish);
}
