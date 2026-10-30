package com.example.agencia.controller;

import com.example.agencia.model.Espiao;
import com.example.agencia.model.EspiaoResumo;
import com.example.agencia.repository.AgenciaRepository;
import com.example.agencia.repository.EspiaoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class EspiaoController {

    private final EspiaoRepository espiaoRepository;

    public EspiaoController(AgenciaRepository agenciaRepository,
                            EspiaoRepository espiaoRepository) {
        this.espiaoRepository = espiaoRepository;
    }
    //Primeiro método de busca
    @GetMapping("/espioes")
    public ResponseEntity<List<Espiao>> buscarPorAgencia(@RequestParam String agencia) {
        List<Espiao> espioes = espiaoRepository.buscarPorNomeAgencia(agencia.toUpperCase());
        return ResponseEntity.ok(espioes);
    }

    // Segundo método de busca 
    @GetMapping("/espioes/resumo")
public ResponseEntity<String> buscarResumo(@RequestParam Integer id) {
    EspiaoResumo resumo = espiaoRepository.buscarResumoPorId(id);

    if (resumo == null) {
        return ResponseEntity.notFound().build();
    }

    String missao = resumo.getMissao() == null ? "não há missão" : resumo.getMissao();

    return ResponseEntity.ok(resumo.getNomeEspiao() + " | " + resumo.getAgencia() + " | " + missao);
}
}
